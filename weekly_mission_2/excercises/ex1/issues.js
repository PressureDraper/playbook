const issue = {
    title: 'issue1',
    repositoryNameAssociated: 'LaunchX',
    status: 'open',
    numberOfComments: 100,
    labels: ['launchx', 'issue1', 'open'],
    author: 'PressureDraper',
    dateCreated: Date(),
    lastUpdated: '18-04-22',
    getTitleAndAuthor: function () {
        return this.title + this.author
    },
    getGeneralInfo: function () {
        return `This repository ${this.title} was created by ${this.author}`
    }
}

console.log("Nombre del issue: " + issue.title)
console.log("Comments totales: " + issue.numberOfComments)
console.log(issue.getGeneralInfo())