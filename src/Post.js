import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {dataFetch} from '../Redux/Post/Post.actions';

const Post = props => {
  useEffect(() => {
    props.data('jahnavisananse');
    props.data('yash001dev');
  }, []);

  return (
    <>
      {console.log('getData>>>>>>>>>>>>>>>>', props.getData)}
      {props.getData.map((value, index) => {
        return (
          <>
            <SafeAreaView>
              <Text style={{fontSize: 20, color: 'red'}}>
                {props.getData[index].name}
              </Text>
              <Text> {value.name + '\n' + value.id + '\n' + value.login} </Text>
            </SafeAreaView>
          </>
        );
      })}
    </>
  );
};
const styles = StyleSheet.create({});

const mapStateToProps = state => ({
  getData: state.dataFetch.item,
});

const mapDispatchToProps = dispatch => ({
  data: data => dispatch(dataFetch(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
