import api from '../services/api';

const fetchApi = async userName => {
  try {
    const basicInfos = await api(userName);
    const starredRepos = await api(`${userName}/starred`);

    if (basicInfos.data && basicInfos.status === 200) {
      const {
        id,
        avatar_url,
        login,
        name,
        bio,
        html_url,
        location,
      } = basicInfos.data;

      const starred = starredRepos.data.map(starredRepo => {
        return {
          id: starredRepo.id,
          name: starredRepo.name,
          full_name: starredRepo.full_name,
          owner_login: starredRepo.owner.login,
          owner_avatar: starredRepo.owner.avatar_url,
          git_url: starredRepo.git_url,
          language: starredRepo.language,
          stargazers_count: starredRepo.stargazers_count,
          description: starredRepo.description,
        };
      });

      return {
        id,
        avatar_url,
        name,
        login,
        bio,
        html_url,
        location,
        starred,
      };
    }
  } catch (err) {
    console.log(err);
  }
};

export default fetchApi;
