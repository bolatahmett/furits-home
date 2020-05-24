import React from 'react'
import { Popover, Badge, List, Avatar, Button } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { Product } from '../Model/Product';

import {
    Link
} from "react-router-dom";
import { Typography } from 'antd';
import ExtractOfAccount from './ExtractOfAccount';
const { Text } = Typography;

class FHBasket extends React.Component<any, any> {

    render() {

        let content = <>Ваша корзина пуста</>;
        if (this.props.basket.length > 0) {
            content = <List
                itemLayout="horizontal"
                dataSource={this.props.basket}
                renderItem={(product: Product) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={require(`./../images/${product.ImageUrl}`)} />}
                            title={product.ProductCode}
                            description={product.Quantity + "кг"}
                        />
                    </List.Item>
                )}
            />
        }

        const buttonDisabled = this.props.basket.length === 0;
        const totalQuantity = 1000;
        return (
            <Popover
                content={
                    <>
                        {content}
                        <br></br>
                        <br></br>
                        <br></br>
                        <ExtractOfAccount></ExtractOfAccount>
                        <Link to={`/basket-result`}>
                            <Button disabled={buttonDisabled} style={{ border: "2px", borderRadius: "8px", backgroundColor: "antiquewhite", fontSize: "x-small" }}>Завершить действие</Button>
                        </Link>

                    </>
                }
                title="корзина">
                <Badge count={this.props.basket.length}>
                    <Button shape="circle" icon={<ShoppingCartOutlined />} />
                </Badge>
            </Popover>
        )
    }
}

const mapStateToProps = (state: any) => {
    const basket = state.basket;
    return { basket };
};

export default connect(mapStateToProps)(FHBasket);
