window.onload = function () {
    var index = 0;
    var pre = document.getElementById("pre");
    var next = document.getElementById("next");
    var img = document.getElementsByTagName("img")[0];
    var inner = document.getElementById("inner");

    var arr = ["../image_test/dog1.jpeg", "../image_test/dog2.jpeg",
        "../image_test/dog3.jpeg", "../image_test/dog4.jpg", "../image_test/dog5.jpeg"
    ];
    pre.onclick = function () {
        index--;
        if (index < 0) {
            index = arr.length - 1;
        }
        img.src = arr[index];
        inner.innerHTML = "这是第" + (index + 1) + "一共有" + arr.length + "图片";
    };
    next.onclick = function () {
        index++;
        if (index > arr.length - 1) {
            index = 0;
        }
        img.src = arr[index];
        inner.innerHTML = "这是第" + (index + 1) + "一共有" + arr.length + "图片";
    };
    console.log(inner.innerHTML);

}