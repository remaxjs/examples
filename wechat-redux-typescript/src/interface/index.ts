export interface TodoProps {
  type: string;
  id: number;
  text: string;
  [otherProps: string]: any;
}

export interface UserInfoProps {
  detail: {
    userInfo: {
      avatar: string;
      avatarUrl: string
    },
  }
}
