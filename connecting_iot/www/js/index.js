var myApp = new Framework7();
var $$ = Dom7;
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

document.addEventListener('deviceready', onDeviceReady.bind(this), false);
$$(document).on('pageInit', function (e) {
    let page = e.detail.page;
    if (page.name === 'activate_led') {
        $$('.confirm-title-ok').on('click', function () {
            myApp.confirm('是否已確認LED燈已接上', '提醒', function () {
                showLocalNotification('效果', '發送xhr訊號!!請確認LED燈');
            });
        });
    }
});

function showLocalNotification(titleText, messageText) {
    myApp.addNotification({
        title: titleText,
        message: messageText
    });
}

function onDeviceReady() {
    document.addEventListener('backbutton', onBackKeyDown, false);
};

function onBackKeyDown() {
    mainView.router.back();
}