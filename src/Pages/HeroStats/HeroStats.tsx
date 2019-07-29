import React from 'react';

export default class HeroStats extends React.Component<{ match: any }, {}> {
  public render(): JSX.Element {
    return <span>hero stats: {this.props.match.params.id}</span>;
  }
}
