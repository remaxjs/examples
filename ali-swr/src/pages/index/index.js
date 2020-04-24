import * as React from 'react';
import { View, Navigator } from 'remax/ali';
import List from 'mini-antui/es/list';
import ListItem from 'mini-antui/es/list/list-item';
import useSWR from 'swr';

export default () => {
  const { data } = useSWR('/users/remaxjs/repos');

  return (
    <View style={{ width: '100%' }}>
      <List>
        <ListItem className="am-list-sticky">Remax Projects</ListItem>
        {data ? (
          data.map((project, index) => (
            <Navigator
              key={project.id}
              url={`/pages/repo/index?repo=${project.name}`}
            >
              <ListItem index={index} last={index === data.length - 1}>
                {project.name}
              </ListItem>
            </Navigator>
          ))
        ) : (
          <ListItem>Loading...</ListItem>
        )}
      </List>
    </View>
  );
};
