(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['exports'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // Node, CommonJS-like
        factory(module.exports);
    } else {
        factory(root);
    }
})(this, function (exports) {
    exports.urlConfig = '/webkit'; // 配置项目名称
    exports.isSignIn = 'login'; // 单点登录的时候配置  ‘home’  非单点登录的时候配置 'login'
    exports.modelManageUrl = 'http://10.200.129.133:8848/designer/'; // 模型管理页面的跳转地址
    exports.isShowServesVersion = false; //是否显示数据库版本信息页面
    exports.title = ''; // 应用名称
    exports.isShowLogo = false; //是否显示logo
    exports.accountMixLength = 4; //用户账号的最小长度
    exports.accountMaxLength = 32; //用户账号的最大长度
    exports.layoutTheme = 1; //控制菜单布局类型
    /*
    //菜单和导航栏样式
    exports.TOOLBAR_SHOW_SHADOW = false; //是否显示导航栏阴影
    exports.TOOLBAR_BG_COLOR = '#06547D'; //导航栏背景颜色
    exports.TOOLBAR_TITLE_COLOR = '#fff'; //导航字体颜色
    exports.TOOLBAR_IS_SHADE = true; //导航字体是否显示渐变色
    exports.MENU_BG_COLOR = '#02324B'; //菜单背景色
    exports.MENU_TEXT_COLOR = '#D5F1FF'; //菜单文字颜色
    exports.MENU_ACTIVE_TEXT_COLOR = '#fff'; //菜单选中文字颜色
*/
    /*
     * @首页的各个子系统的跳转方式
     * 1：统一基础平台跳转到内外部系统，打开新的浏览器页签（默认）
     * 2：统一基础平台跳转到内外部系统，刷新当前页签
     * 3：统一基础平台跳转到内部系统，刷新当前页签，跳转到外部系统，在首页的用iframe展示第三方系统(未对接我们的单点登录才行。对接了我们的单点后由于iframe跨域问题登录校验不了)
     * */
    exports.jumpWay = 1; //首页的各个子系统的跳转方式
    /*头部导航栏logo  base64格式(72*26)*/
    exports.logoBase64 = '';
    /*
     * 用户密码选取那种校验方式  校验规则跟可在 exports.userPasswordRule 内配置修改
     * 1：默认不校验
     * 2：至少包含大小写字母、数字、特殊字符中的两种，长度6-16位
     * 3：至少包含大小写字母、数字、特殊字符中的三种，长度6-16位
     * 4：至少包含大小写字母、数字、特殊字符中的四种，长度6-16位
     * 5：至少包含字母和数字，长度为6-16位
     * */
    exports.userPwdComplexStrateg = 1; //默认不校验
    /*
     * 用户密码的校验规则
     * */
    exports.userPasswordRule = [
        { pattern: null, message: null },
        {
            pattern: /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,16}$/,
            message: '至少包含大小写字母、数字、特殊字符中的两种，长度6-16位',
            trigger: 'blur',
        },
        {
            pattern: /^(?![A-Za-z]+$)(?![A-Z\d]+$)(?![A-Z\W_]+$)(?![a-z\d]+$)(?![a-z\W_]+$)(?![\d\W_]+$)\S{6,16}$/,
            message: '至少包含大小写字母、数字、特殊字符中的三种，长度6-16位',
            trigger: 'blur',
        },
        {
            pattern: /^(?![A-Za-z0-9]+$)(?![a-z0-9\W]+$)(?![A-Za-z\W]+$)(?![A-Z0-9\W]+$)[a-zA-Z0-9\W]{6,16}$/,
            message: '至少包含大小写字母、数字、特殊字符中的四种，长度6-16位',
            trigger: 'blur',
        },
        {
            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/,
            message: '至少包含字母和数字，长度为6-16位',
            trigger: 'blur',
        },
    ];
    exports.isCluster = false; //是否是集群环境
});
