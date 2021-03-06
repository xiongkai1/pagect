import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MomentLocalesPlugin from 'moment-locales-webpack-plugin';
import defineConfig from '@easytool/define-config';
import { name, devEnvironments, parcel } from './package.json';

const { globals } = devEnvironments;
const BUILD_PATH = 'build';
const ASSETS_PATH = 'assets';
const CONTENT_HASH = '[contenthash:8]';

export function getPublicPath(publicPath = '') {
    return publicPath.endsWith('/') ? publicPath : publicPath + '/';
}

export default function(env) {
    
    return {
        entry: {
            main: ['./src/index.js']
        },
        output: {
            publicPath: getPublicPath(parcel.publicPath),
            path: path.resolve(__dirname, BUILD_PATH),
            filename: `${ASSETS_PATH}/js/[name].${CONTENT_HASH}.js`,
            chunkFilename: `${ASSETS_PATH}/js/[name].${CONTENT_HASH}.chunk.js`,
            // 避免多个应用之间 jsonpFunction 名冲突
            jsonpFunction: name
        },
        resolve: {
            extensions: ['.js', '.jsx', '.css', '.less', '.scss', '.sass'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
                Components: path.resolve(__dirname, 'src/components/'),
                Config: path.resolve(__dirname, 'src/config/'),
                Constants: path.resolve(__dirname, 'src/constants/'),
                Containers: path.resolve(__dirname, 'src/containers/'),
                Fonts: path.resolve(__dirname, 'src/fonts/'),
                Images: path.resolve(__dirname, 'src/images/'),
                Layouts: path.resolve(__dirname, 'src/layouts/'),
                Routes: path.resolve(__dirname, 'src/routes/'),
                Services: path.resolve(__dirname, 'src/services/'),
                Styles: path.resolve(__dirname, 'src/styles/'),
                Utils: path.resolve(__dirname, 'src/utils/')
            }
        },
        optimization: {
            splitChunks: {
                minSize: 10,
                minChunks: 1,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            },
            noEmitOnErrors: true
        },
        module: {
            rules: [{
                /**
                 * eslint代码规范校验
                 */
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                include: path.resolve(__dirname, 'src'),
                use: [{
                    loader: 'eslint-loader',
                    options: {
                        fix: true,
                        configFile: `.eslintrc${env === 'development' ? '' : '.prod'}.js`
                    }
                }]
            }, {
                /**
                 * webpack会按顺序查找匹配的loader
                 */
                oneOf: [{
                    /**
                     * 主项目js
                     */
                    test: /\.(js|jsx)?$/,
                    include: path.resolve(__dirname, 'src'),
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }]
                }, {
                    /**
                     * 主项目css
                     */
                    test: /\.(css|less)$/,
                    include: path.resolve(__dirname, 'src'),
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 2,
                                localIdentName: '[local]__[hash:base64:5]',
                                minimize: {
                                    safe: true
                                }
                            }
                        },
                        'postcss-loader',
                        {
                            loader: 'less-loader',
                            options: {
                                lessOptions: {
                                    javascriptEnabled: true
                                }
                            }
                        }
                    ]
                }, {
                    /**
                     * 第三方css
                     */
                    test: /\.(css|less)$/,
                    exclude: path.resolve(__dirname, 'src'),
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'less-loader',
                            options: {
                                lessOptions: {
                                    javascriptEnabled: true
                                }
                            }
                        }
                    ]
                }, {
                    /**
                     * 全局图片
                     */
                    test: /\.(bmp|png|jpg|jpeg|gif|svg)$/,
                    exclude: path.resolve(__dirname, 'src/fonts'),
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 10,
                            name: `${ASSETS_PATH}/images/[name].${CONTENT_HASH}.[ext]`
                        }
                    }]
                }, {
                    /**
                     * favicon
                     */
                    test: /\.ico$/,
                    include: path.resolve(__dirname, 'src/images'),
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 10,
                            name: `${ASSETS_PATH}/images/[name].[ext]`
                        }
                    }]
                }, {
                    /**
                     * 全局字体
                     */
                    test: /\.(woff|eot|ttf|svg)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 10,
                            name: `${ASSETS_PATH}/fonts/[name].${CONTENT_HASH}.[ext]`
                        }
                    }]
                }, {                    
                    exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.(html|ejs)$/, /\.json$/],
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: `${ASSETS_PATH}/file/[name].${CONTENT_HASH}.[ext]`
                        }
                    }
                    // 新 loader 需要加在 file-loader 之前
                }]
            }]
        },
        plugins: [
            // 清除编译目录
            new CleanWebpackPlugin(),
            // style规范校验
            new StyleLintPlugin({
                context: 'src',
                files: '**/*.(c|sc|sa|le)ss',
                fix: true,
                cache: true
            }),
            // css提取插件
            new MiniCssExtractPlugin({
                filename: `${ASSETS_PATH}/css/[name].${CONTENT_HASH}.css`,
                chunkFilename: `${ASSETS_PATH}/css/[name].${CONTENT_HASH}.chunk.css`   // chunk css file
            }),
            // 用于文件拷贝
            new CopyWebpackPlugin({
                patterns: [{
                    from: './src/data',
                    to: `${ASSETS_PATH}/data/`,
                    toType: 'dir'
                }]
            }),
            // moment 库减重插件
            new MomentLocalesPlugin({       
                localesToKeep: ['zh-cn']
            }),
            // index.html 模板插件
            new HtmlWebpackPlugin({                             
                filename: 'index.html',
                template: './src/template.ejs',
                faviconPath: `${ASSETS_PATH}/images/favicon.ico`
            }),
            // 配置全局变量
            new webpack.DefinePlugin({
                ...defineConfig(globals, env === 'development')                       // 'false'表示所有自定义全局变量的值设为 false
            }),
            // 文件大小写检测
            new CaseSensitivePathsPlugin()
        ]
    };
}