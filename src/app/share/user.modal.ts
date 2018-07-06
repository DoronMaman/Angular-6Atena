export interface Users {
    name: string;
    adress: string;
    email: string;
    role: string;
    discription: string;
    freinds: [
        {
            name: string;
        }
    ],
    post: [
        {
            title: string
            discription: string;
        }
    ]
}
export interface TagForest {
    roots: Users[];
}