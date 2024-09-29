declare module 'ProjectProps' {
  export interface ProjectProps {
    id: string;
    key: string;
    owner: string;
    avatar: string;
    title: string;
    description: string;
    comments: number;
    likes: number;
    code: string;
    color: string;
    language: string;
  }

  export interface ProjectPropsPost {
    id?: string;
    title: string;
    description: string;
    code: string;
    color: string;
    language: string;
  }
}
