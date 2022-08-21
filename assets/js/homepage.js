var getUserRepos = function() {
    fetch("https://api.github.come/users/octocat/repos");
};

getUserRepos() {
    var response = fetch("https://api.github.com/users/octocat/repos").then(function(response) {
        console.log("inside", response);
    });

    console.log("outside");
}