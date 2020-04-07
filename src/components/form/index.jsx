import React from 'react';
import data from './form.json'
import { Form, Input, Typography, Collapse, Divider, Rate, Select, Button } from 'antd';
import styles from "./index.module.css";

const { Panel } = Collapse;
const { Title, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;
function ApplicationForm() {
    return (
        <Form>
            <Form.Item>
                <Select
                    showSearch
                    placeholder="Выберите сотрудника"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
            </Form.Item>
            {
                data.groups.map(group => (
                    <Collapse accordion>
                        <Panel header={group.title} key="1">{group.subgroups.map(subgroup => (
                            <div className={styles.subgroups}>
                                <Divider orientation="left">{subgroup.title}</Divider>
                                <div>{subgroup.questions.map(question => (
                                    <div className={styles.question}>
                                        <Title level={4}>{question.title}</Title>
                                        <Text type="secondary">{question.description}</Text>
                                        <Form.Item>
                                            <Rate className={styles.input} count={10} tooltips={Array.from(new Array(10)).map((i, index) => index + 1)} />
                                            <span className="ant-rate-text">10</span>
                                        </Form.Item>

                                        <Form.Item>
                                            <TextArea rows={4} placeholder="Комментарий" />
                                        </Form.Item>
                                    </div>
                                ))}
                                </div>
                            </div>

                        ))}
                        </Panel>
                    </Collapse>
                ))
            }
            <Form.Item className={styles.input}>
                <Button htmlType='submit' type="primary">Отправить</Button>
            </Form.Item>

        </Form>
    );
}

export default ApplicationForm;
