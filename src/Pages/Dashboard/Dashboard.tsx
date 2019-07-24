import React from "react";

export default class Dashboard extends React.Component<{}, {}> {
    constructor(props: Readonly<{}>) {
        super(props);
    }

    public render(): JSX.Element {
        console.log('dashboard rendered');
        return (<>Dashboard</>);
    }
}
