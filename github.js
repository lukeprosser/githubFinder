class Github {
  constructor() {
    this.client_id = '6d3753ce435b8426e9dc';
    this.client_secret = '5e46130eabd2dff8ea60db20cb29e26d337e9f39';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    // const profileData = profileResponse.json();
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      // profile: profileData
      profile, // In ES6 this is the same as writing 'profile: profile'
      repos // In ES6 this is the same as writing 'repos: repos'
    }
  }
}