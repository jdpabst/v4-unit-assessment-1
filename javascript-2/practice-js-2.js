/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

var gitDefinition = "Git is the industry standard version control software that allows us to track changes and collaborate with others in large groups."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

var gitHubDefinition = 'GitHub is a web platform that simplifies working with Git. It also works as an internet based backup for our git files.'

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

var init = {
    code: 'git init',
    description: 'Initialize. Initializes and existing directory as a Git repository.'
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

var clone = {
    code: 'git clone',
    description: 'get an entire repository from a hosted location via URL (we do this all the time in GitHub)'
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

var status = {
    code: 'git status',
    description: 'allows you to see the modifications to files in your working directory, ready and staged for your next commit'
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

var add = {
    code: 'git add',
    description: 'add a file as it looks now to your next commit (stage). These will be the changes and modifications you have made to your files'
}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

var commit = {
    code: 'git commit -m',
    description: 'commit your staged content as a new commit snapshot -- must include a message (e.g. git commit -m "my message")'
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

var addRemote = {
    code: 'git remote add',
    description: 'add a git URL as an alias'
}

//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

var push = {
    code: 'git push',
    description: 'transmits local branch commits to the remote repository branch (e.g. git push origin master)'
}