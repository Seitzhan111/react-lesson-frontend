export interface IPropsLogin {
    setEmail: (value: string) => void
    setPassword: (value: string) => void
    navigate: (to: string) => void
}

export interface IPropsRegister {
    setEmail: (value: string) => void
    setPassword: (value: string) => void
    setRepeatPassword: (value: string) => void
    setFirstName: (value: string) => void
    setUsername: (value: string) => void
    navigate: (to: string) => void
}

export interface IAuthState {
    user: IPublicUser,
    isLogged: boolean
}

export interface IPublicUser {
    id: number | null,
    firsName: string,
    username: string
    email: string,
    createAt: string,
    updateAt: string,
    watchlist: [IWatchlist]
}

export interface IWatchlist {
    id: number | null,
    name: string,
    assetId: string,
    createAt: string,
    updateAt: string,
    user: number | null
}