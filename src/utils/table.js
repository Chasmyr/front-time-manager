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
