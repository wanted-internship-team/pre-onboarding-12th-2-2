import { octokitInstance } from './instance';

const baseURL = `/repos`;

export const getRepo = async (owner: string, repo: string) => {
  const res = await octokitInstance.request(`GET ${baseURL}/${owner}/${repo}`);
  return res;
};

export const getRepoIssueList = async (owner: string, repo: string, page: number) => {
  const res = await octokitInstance.request(`GET ${baseURL}/${owner}/${repo}/issues`, {
    state: 'open',
    sort: 'comments',
    page: page,
  });
  return res;
};

export const getIssueDetail = async (owner: string, repo: string, issueNumber: number) => {
  const res = await octokitInstance.request(`GET ${baseURL}/${owner}/${repo}/${issueNumber}`);
  return res;
};
