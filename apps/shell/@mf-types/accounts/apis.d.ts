
    export type RemoteKeys = 'accounts/App';
    type PackageType<T> = T extends 'accounts/App' ? typeof import('accounts/App') :any;