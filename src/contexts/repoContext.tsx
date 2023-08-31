import React, { createContext, useContext, useState } from 'react';
import { IrepoInfo } from '../types/issue';

interface IRepoContext {
  repoInfo: IrepoInfo;
  setRepoInfo: React.Dispatch<React.SetStateAction<IrepoInfo>>;
}

const RepoContext = createContext<IRepoContext | undefined>(undefined);

export const RepoProvider = ({ children }: { children: React.ReactNode }) => {
  const [repoInfo, setRepoInfo] = useState<IrepoInfo>({
    owner: 'facebook',
    repo: 'react',
  });

  return <RepoContext.Provider value={{ repoInfo, setRepoInfo }}>{children}</RepoContext.Provider>;
};

export const useRepoContext = () => {
  const context = useContext(RepoContext);

  if (!context) {
    throw new Error('Cannot find RepoProvider');
  }

  return context;
};
