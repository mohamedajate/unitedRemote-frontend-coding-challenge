import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Node from '../../shared/components/Node'
import { Content } from './style';

class View extends Component {

  render() {
    const { nodes, onLoadMore } = this.props;
    return (
        <Content>
          <InfiniteScroll
            pageStart={0}
            loadMore={onLoadMore}
            hasMore={true || false}
            loader={<div className="loader" key={0}>Loading ...</div>}
          >

            {
              nodes.map(node => {
                return (
                  <Node
                    key={`node-${node.createdAt}`}
                    node={node}
                  />)
              })
            }
          </InfiniteScroll>
        </Content>
    )
  }
}
export default View