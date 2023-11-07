export const onlyManagedTeams = (users) => {
  let managedTeams

  users.forEach(user => {
    this.$store.state.currUser.managed_teams.forEach((team) => {
      if (user.teamsID === team) {
        managedTeams.push(team)
      }
    })
  });
  return managedTeams
}
