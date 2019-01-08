var jsonData;

function getBookmarks() {
    jsonData = data;
    // console.log(jsonData);
}

document.addEventListener("DOMContentLoaded", function (event) {
    getBookmarks();
    // loadHyperLinks();
    // loadCredentialsHolder();
    // loadNoticeBoard();
    HyperLinks.loadHyperLinks();
    CredentialsHolder.loadCredentialsHolder();
    NoticeBoard.loadNoticeBoard();
});

function closeDialog() {
    document.getElementById('myDialog').close();
}

function closeDynamicDialog() {
    document.getElementById('dynamicDialog').close();
    document.getElementById('dynamicTable').innerHTML = "";
}