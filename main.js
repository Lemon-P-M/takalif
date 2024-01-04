document.addEventListener("DOMContentLoaded", function () {
    // Fetch content from the provided link and display it in the centeredContent div
    fetch("https://onedrive.live.com/embed?resid=5DA69E8955C20631!194&authkey=!AADZFwCYq2-95cI&em=2&wdAllowInteractivity=False&ActiveCell=%27Sheet1%27!A1&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False&wdInConfigurator=False&wdInConfigurator=False")
        .then(response => response.text())
        .then(data => {
            document.getElementById("centeredContent").innerHTML = data;
        })
        .catch(error => console.error("Error fetching content:", error));
});
