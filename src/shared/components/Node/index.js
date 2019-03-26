import React, { Component } from 'react'
import { Content, Img, Repo, H3, Text, Statistics, Issues, Stars } from './style'

const Node = (props) => {

  const { node: { owner, name, description, issues, stargazers } } = props;
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
export default Node