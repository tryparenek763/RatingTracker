/* eslint-disable react/prop-types */
import React from 'react';
import {
  Collapse
} from 'antd';
import Subgroup from '../subgroup';

const { Panel } = Collapse;
function Group({ group }) {
  return (
    <Collapse accordion>
      <Panel header={group.title}>
        {group.subgroups.map(subgroup => (
          <Subgroup subgroup={subgroup} />
        ))}
      </Panel>
    </Collapse>
  );
}

export default Group;
