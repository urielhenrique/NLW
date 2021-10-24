//Java Script Alert trocar links
const LinksSocialMedia = {
  twitch: 'gomes_o_lazarento',
  github: 'urielhenrique',
  youtube: 'UCQu3iLF4RNS2u_-t4BvQu5A',
  instagram: 'urielgomes.dev',
  facebook: 'gomes_o_lazarento',
  twitter: 'gomes_o_lazarento'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
