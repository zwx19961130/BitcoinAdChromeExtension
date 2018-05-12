function checkUrl() {
    var Checkflag = 0,
        url = window.location.href;

    //手动添加不需要清除广告的域
    var notDel = [
        "www.baidu.com",
        "taobao.com",
        "tmall.com",
        "jd.com"
    ];

    //正则匹配
    for (var i = 0; i < notDel.length; i++) {
        var reg = new RegExp(notDel[i], "g");

        if (reg.test(url)) {
            console.log('This page does not clear ads.');
            break;
        } else {
            if (i == notDel.length - 1) {
                Checkflag = 1;
            }
        }
    }

    if (Checkflag == 1) {
        clear();
        findSomeAdPossible();
    }
}


function clear() {
    console.log('Clear Start');
    //此处可手动添加广告框id名，去除顽疾ad必备
    var ad_id_name = [
        "cproIframe2001holder",
        "cproIframe2002holder",
        "cproIframe2003holder",
        "cproIframe2004holder",
        "cproIframe2005holder",
        "cproIframe2006holder",
        "cproIframe2007holder",
        "cproIframe2008holder",
        "cproIframe2009holder",
        "id_300x250_banner_top",
        "ads",
        "google_image_div",
        "mx_cs_71603_1261456",
        "AC_TR86_71603",
        "cproIframe_u2060917_1",
        "content_right",
        "left-promotion",
        "top_ads"
    ];

    //此处添加广告框类名
    var ad_css_name = [
        "cproIframe_u410704_3",
        "img_ad",
        "hover_btn"
    ];

    for (var i = 0; i < ad_id_name.length; i++) {
        //使用remove删除节点，提升性能
        //$('#' + ad_id_name[i]).remove();
        $('#' + ad_id_name[i]).css("src", "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIxNRv9KERly5pwMb9s0Rgc2vQSUMGyuWGokXoPuqRibStLQZOsKiaSllneeOMNdSBApQGDDs4oxn0w/132");
    }

    for (var i = 0; i < ad_css_name.length; i++) {
        $('.' + ad_css_name[i]).css("src", "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIxNRv9KERly5pwMb9s0Rgc2vQSUMGyuWGokXoPuqRibStLQZOsKiaSllneeOMNdSBApQGDDs4oxn0w/132");
    }
}


function findSomeAdPossible() {
    var sap = $('div iframe'),
        ad_img = $('div script').parent().find('img,embed'),
        float_img = $('div object').parent().find('img,embed');

    arrayDel(sap, 360, 200);
    arrayDel(ad_img, 350, 150);
    arrayDel(float_img, 350, 150);
}

function arrayDel(arr, conWidth, conHeight) {
    var len = arr.length;

    for (var i = 0; i < len; i++) {
        var self = arr.eq(i);

        if (self.width() <= conWidth || self.height() <= conHeight) {
            self.css("src", "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIxNRv9KERly5pwMb9s0Rgc2vQSUMGyuWGokXoPuqRibStLQZOsKiaSllneeOMNdSBApQGDDs4oxn0w/132");
        }

    }
}

function init() {
    checkUrl();
}