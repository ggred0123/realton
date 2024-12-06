export type UserBaseInfo = {
    id: number;
    email: string;
    password: string;
    name: string;
    totalExp: number;
    refreshToken: string | null;
};
