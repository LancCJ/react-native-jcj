import React, { PropTypes } from 'react';
import { View, StyleSheet, ListView ,Text} from 'react-native';

const propTypes = {
  items: PropTypes.array,
  renderItem: PropTypes.func,
  style: View.propTypes.style,
  itemsPerRow: PropTypes.number,
  onEndReached: PropTypes.func,
  scrollEnabled: PropTypes.func,
  pageSize: PropTypes.number
};

const GridSectionView = (
  {
    items,
    renderItem,
    style,
    itemsPerRow,
    onEndReached,
    scrollEnabled,
    pageSize
  }
) => {
  const groupItems = (renderItems, renderItemsPerRow) => {
    const itemsGroups = [];
    let group = [];
    renderItems.forEach((item) => {
      if (group.length === renderItemsPerRow) {
        itemsGroups.push(group);
        group = [item];
      } else {
        group.push(item);
      }
    });
    if (group.length > 0) {
      itemsGroups.push(group);
    }
    return itemsGroups;
  };

  const renderGroup = (group,sectionID, rowID) => {
    const itemViews = group.map((item) => {
      const i = renderItem(item);
      return i;
    });
    return (
      <View style={styles.group}>
        {itemViews}
      </View>
    );
  };

    const renderSectionHeader = (data, sectionID) => {
        if (sectionID === 'section1') {
            return null
        }
        return (
            <View>
                <View style={{flex: 1}}><Text>{sectionID}</Text></View>
            </View>
        );
    };

  const groups = groupItems(items, itemsPerRow);

  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
    sectionHeaderHasChanged: (s1, s2) => s1 !== s2
  });

  return (
    <ListView
      initialListSize={1}
      dataSource={ds.cloneWithRows(groups)}
      renderRow={renderGroup}
      renderSectionHeader={renderSectionHeader}
      style={style}
      onEndReached={onEndReached}
      scrollEnabled={scrollEnabled}
      pageSize={pageSize || 1}
    />
  );
};

const styles = StyleSheet.create({
  group: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

GridSectionView.propTypes = propTypes;

GridSectionView.defaultProps = {
  items: [],
  renderItem: null,
  style: undefined,
  itemsPerRow: 1,
  onEndReached: undefined
};

export default GridSectionView;
