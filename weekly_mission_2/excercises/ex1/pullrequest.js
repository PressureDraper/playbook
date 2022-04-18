const pullrequest = {
    title: 'changing description',
    author: 'PressureDraper',
    branchName: 'master',
    dateCreated: Date(),
    status: 'pending',
    repositoryNameAssociated: 'LaunchX/MissionNodeJS',
    getStatus: function () {
        return this.status
    },
    getTitleAndAuthor: function () {
        return this.title + " --" +this.author
    },
}

console.log("Pull Request Status: " + pullrequest.getStatus())
console.log("Title and author: " + pullrequest.getTitleAndAuthor())