import React, { Component } from 'react'
import { Content, Img, Repo, H3, Text, Statistics, Issues, Stars } from './style'

class Node extends Component {

  render() {
    const { node: { owner, name, description, issues, stargazers } } = this.props;
    console.log(this.props.node)
    return (
      <Content>
        <Img src={owner.avatarUrl} />
        <Repo>
          <H3>{name}</H3>
          <Text>{description}</Text>
          <Statistics>
            <Stars>{stargazers.totalCount}</Stars>
            <Issues>{issues.totalCount}</Issues>
          </Statistics>
        </Repo>
      </Content>
    )
  }
}
export default Node