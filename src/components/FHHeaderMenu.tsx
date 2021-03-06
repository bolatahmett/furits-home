import React, { useState } from "react";
import {
    Link
} from "react-router-dom";

import { Menu, Row, Col, Breadcrumb, Alert } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { HomeOutlined, InfoCircleOutlined, DownCircleOutlined } from '@ant-design/icons';
import { useTranslation } from "react-i18next";
import { connect } from 'react-redux';
import { setProductOnHomePage } from './../redux/actions/actions';
import TextLoop from "react-text-loop";

function FHHeaderMenu(props: any) {

    const { t } = useTranslation();
    const [breadcrumbItems, setbreadcrumbItems] = useState([])

    const handleClick = (e: any) => {
        e.key === "homepage" ? setbreadcrumbItems([]) : setbreadcrumbItems(e.keyPath.reverse());
        let query = {};
        switch (e.key) {
            case "fruits":
                query = {
                    ProductType: "fruit"
                };
                break;
            case "vegetable":
                query = {
                    ProductType: "vegetable"
                };
                break;
            case "citrus":
                query = {
                    IsCitrus: true,
                    ProductType: "fruit"
                };
                break;
            case "exoticfruits":
                query = {
                    IsExoticFruits: true,
                    ProductType: "fruit"
                };
                break;
            case "organicfruits":
                query = {
                    IsOrganic: true,
                    ProductType: "fruit"
                };
                break;
            case "seasonalvegetables":
                query = {
                    ProductType: "vegetable",
                    IsSeasonalVegetables: true
                };
                break;
            case "organic.vegetable":
                query = {
                    ProductType: "vegetable",
                    IsOrganic: true
                };
                break;
            case "greens":
                query = {
                    ProductType: "vegetable",
                    IsGreens: true
                };
                break;
            default:
                break;
        }

        props.setProductOnHomePage(query);
    };

    const getbreadcrumbItems = () => {
        return breadcrumbItems.map((item: any) => {
            return <Breadcrumb.Item>{t("header.menu."+item)}</Breadcrumb.Item>
        });
    }

    return (
        <>
        <Row className={"fhheadermenu"}>
            <Col xs={24} sm={24} md={24} lg={20} xl={18}>
                <Menu onClick={handleClick} mode="horizontal">
                    <Menu.Item key="homepage">
                        <HomeOutlined />
                        <Link to="/">{t("homepage")}</Link>
                    </Menu.Item>
                    <SubMenu
                        key="fruits"
                        title={<span className="submenu-title-wrapper"> <DownCircleOutlined /> {t("fruits")} </span>}>
                        <Menu.Item key="citrus" > <Link to="/">{t("header.menu.citrus")}</Link> </Menu.Item>
                        <Menu.Item key="exoticfruits" > <Link to="/">{t("header.menu.exoticfruits")}</Link> </Menu.Item>
                        <Menu.Item key="organicfruits" > <Link to="/">{t("header.menu.organicfruits")} </Link> </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="vegetable" title={<span className="submenu-title-wrapper"> <DownCircleOutlined /> {t("vegetable")} </span>}  >
                        <Menu.Item key="seasonalvegetables" > <Link to="/">{t("header.menu.seasonalvegetables")}</Link> </Menu.Item>
                        <Menu.Item key="organicvegetable" > <Link to="/">{t("header.menu.organicvegetable")}</Link> </Menu.Item>
                        <Menu.Item key="greens" > <Link to="/">{t("header.menu.greens")}</Link> </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="aboutus">
                        <InfoCircleOutlined />
                        <Link to="/">{t("aboutus")}</Link>
                    </Menu.Item>
                </Menu>
                <Breadcrumb>
                    {getbreadcrumbItems()}
                </Breadcrumb>
            </Col>
        </Row>
        <Row style={{ width: "100%" }} justify={"center"}>
    <Col xs={24} sm={24} md={24} lg={20} xl={18}>
        <Alert
            banner
            message={
                <TextLoop mask>
                    <div>{t("textloop.text.1")}</div>
                    <div>{t("textloop.text.2")}</div>
                    <div>{t("textloop.text.3")}</div>
                </TextLoop>
            }
        />
    </Col>
</Row>
</>
    )

}

export default connect(null, {
    setProductOnHomePage
})(FHHeaderMenu)