function loadPage(category) {
    const content = document.getElementById("content");

    // Define iframe links for each category
    const iframeLinks = {
        clothing: "clothing.html",
        foodvan: "foodvan.html",
        phoneaccessories: "phoneaccessories.html",
        watchshop: "watchshop.html",
        footwear: "footwear.html",
        cosmetics: "cosmetics.html",
        menswear: "menswear.html",
    };

    // Update content dynamically
    content.innerHTML = `
        <h2>${category.replace(/([A-Z])/g, ' $1').toUpperCase()} Business Ideas</h2>
        <iframe src="${iframeLinks[category]}" width="100%" height="500px" style="border:none;"></iframe>
    `;
}