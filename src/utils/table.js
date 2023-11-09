export const onlyManagedTeams = (users, teams) => {
  let managedTeams = []

  users.forEach(user => {
    teams.forEach((team) => {
      if (user.teamsId === team) {
        managedTeams.push(user)
      }
    })
  });
  return managedTeams
}

export const onlyUsers = (users, currUser) => {
  let userToDisplay = []

  users.forEach(user => {
    if (user.username != currUser) {
      userToDisplay.push(user)
    }
  });
  return userToDisplay
}
