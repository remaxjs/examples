import * as React from 'react';
import { View, Text, Image, request } from 'remax/ali';
import styles from './index.css';

export default () => {
  const [users, setUsers] = React.useState([]);

  const fetchUsers = async () => {
    const { data } = await request({
      url: process.env.REMAX_APP_API_BASE_URL + '/users',
    });
    setUsers(data);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View className={styles.app}>
      {users.map(user => (
        <View key={user}>{user}</View>
      ))}
    </View>
  );
};
