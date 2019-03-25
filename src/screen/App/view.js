import React, { Component } from 'react';
import Node from '../../shared/components/Node'
import { Content } from './style';

class View extends Component {

  render() {
    const { nodes } = this.props;
    return (
      <Content>
        {
          nodes.map(node => {
            return (
              <Node
                key={`node-${node.createdAt}`}
                node={node}
              />)
          })
        }
      </Content>
    )
  }
}
export default View