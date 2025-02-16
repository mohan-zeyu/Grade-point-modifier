console.log("Hello world!");
const observer = new MutationObserver(() => {
    const elements = document.querySelectorAll('[aria-describedby]');
    if (elements.length > 0) {
        console.log(elements);
        observer.disconnect(); // 停止监听
    }
    alert("获得称号 : 绩点之神");
    elements.forEach((element) => {
        // 获取 aria-describedby 的值
        const describedById = element.getAttribute("aria-describedby");
        console.log(describedById);
        // 根据属性值进行判断和修改
        if (describedById === "tabGrid_jd") {
          // 修改为 Type A
          element.textContent = "5.0";
        } else if (describedById === "tabGrid_cj") {
          // 修改为 Type B
          element.textContent = "100";
        }
      });
});

observer.observe(document.body, { childList: true, subtree: true });

