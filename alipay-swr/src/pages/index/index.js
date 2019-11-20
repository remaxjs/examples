import * as React from 'react';
import { View, Navigator } from 'remax/alipay';
import List from 'mini-antui/es/list';
import ListItem from 'mini-antui/es/list/list-item';
import useSWR from 'swr';

export default () => {
  const { data } = useSWR('/users/remaxjs/repos');

  return (
    <View>
      <List>
        <ListItem className="am-list-sticky">Remax Projects</ListItem>
        {data ? (
          data.map((project, index) => (
            <ListItem index={index} key={project.id} last={index === data.length - 1}>
              <Navigator url={`/pages/repo/index?repo=${project.name}`}>{project.name}</Navigator>
            </ListItem>
          ))
        ) : (
          <ListItem>Loading...</ListItem>
        )}
      </List>
    </View>
  );
};
