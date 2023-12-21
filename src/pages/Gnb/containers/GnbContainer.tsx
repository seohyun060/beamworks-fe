import React, { useCallback, useEffect, useState } from 'react';
import Gnb from '../Gnb';
import useCadbStore from '@store/zustand/cadbZustand';
import { useNavigate } from 'react-router-dom';
import { GnbStore } from '@store/zustand/gnbZustand';
import useGnbStore from '@store/zustand/gnbZustand';
import GoogleTranslate from 'src/lang/GoogleTranslate';
import {
	tabTextsKo,
	companyTextsKo,
	newsTextsKo,
	visitTextsKo,
	productTextsKo,
} from 'src/lang/GnbTexts';
import { NavContext } from '@typedef/types';

type Props = {
	location: string;
};

const GnbContainer = ({ location }: Props) => {
	const {
		company,
		product,
		tabs1,
		tabs2,
		news,
		visit,
		setTabs1,
		setTabs2,
		setCompany,
		setNews,
		setVisit,
		setProduct,
	} = useGnbStore() as GnbStore;
	const tab1List = [company, news, product, visit];
	const [trTabs, setTrTabs] = useState(tabTextsKo);
	const [trCompanay, setTrCompanay] = useState(companyTextsKo);
	const [trNews, setTrNews] = useState(newsTextsKo);
	const [trVisit, setTrVisit] = useState(visitTextsKo);
	const [trProduct, setTrProduct] = useState(productTextsKo);
	const { languageCode } = useGnbStore();
	const getTranslate = useCallback(async () => {
		if (languageCode === 'ko') {
			setTrTabs(tabTextsKo);
			setTrCompanay(companyTextsKo);
			setTrNews(newsTextsKo);
			setTrVisit(visitTextsKo);
			setTrProduct(productTextsKo);
		} else {
			const dataTabs = await GoogleTranslate(tabTextsKo, languageCode);
			const dataCompany = await GoogleTranslate(companyTextsKo, languageCode);
			const dataNews = await GoogleTranslate(newsTextsKo, languageCode);
			const dataVisit = await GoogleTranslate(visitTextsKo, languageCode);
			const dataProduct = await GoogleTranslate(productTextsKo, languageCode);
			setTrTabs(dataTabs);
			setTrCompanay(dataCompany);
			setTrNews(dataNews);
			setTrVisit(dataVisit);
			setTrProduct(dataProduct);
		}
	}, [trTabs, trCompanay, trNews, trVisit, trProduct, languageCode]);
	useEffect(() => {
		getTranslate();
		return () => {};
	}, [languageCode]);
	const updateContent = (
		content: NavContext[],
		translatedContent: string[],
	) => {
		const updatedContent = [...content];
		for (let i = 0; i < content.length; i++) {
			updatedContent[i].title = translatedContent[i * 3];
			updatedContent[i].context[0].label = translatedContent[i * 3 + 1];
			updatedContent[i].context[1].label = translatedContent[i * 3 + 2];
		}
		return updatedContent;
	};

	const updateProductContent = (
		content: NavContext[],
		translatedContent: string[],
	) => {
		const updatedContent = [...content];
		for (let i = 0; i < content.length; i++) {
			if (i === 0) {
				updatedContent[i].title = translatedContent[0];
				updatedContent[i].context[0].label = translatedContent[1];
				updatedContent[i].context[1].label = translatedContent[2];
			} else {
				updatedContent[i].title = translatedContent[i * 4 - 1];
				updatedContent[i].context[0].label = translatedContent[i * 4];
				updatedContent[i].context[1].label = translatedContent[i * 4 + 1];
				updatedContent[i].context[2].label = translatedContent[i * 4 + 2];
			}
		}
		return updatedContent;
	};

	useEffect(() => {
		setTabs1(trTabs.slice(0, 4));
		const updatedTabs2 = [...tabs2];
		for (let i = 0; i < tabs2.length; i++) {
			updatedTabs2[i].label = trTabs[i + 4];
		}
		setTabs2(updatedTabs2);

		setCompany(updateContent(company, trCompanay));
		setNews(updateContent(news, trNews));
		setVisit(updateContent(visit, trVisit));
		setProduct(updateProductContent(product, trProduct));

		return () => {};
	}, [languageCode, trTabs, trCompanay, trNews, trProduct]);

	const [globeToggle, setGlobeToggle] = useState(false);
	const languages = [
		{
			text: '한국어',
			code: 'ko',
		},
		{
			text: 'English',
			code: 'en',
		},
		{
			text: 'ру́сский язы́к',
			code: 'ru',
		},
		{
			text: '日本語',
			code: 'ja',
		},
		{
			text: '中文',
			code: 'zh',
		},
		{
			text: 'Español',
			code: 'es',
		},
		{
			text: 'Deutsch',
			code: 'de',
		},
		{
			text: 'Français',
			code: 'fr',
		},
		{
			text: 'हिन्दी',
			code: 'hi',
		},
	];

	const navigate = useNavigate();

	const [tabHovered, setTabHovered] = useState(Array(6).fill(false));
	const onTabEnter = useCallback(
		(index: number) => {
			if (!tabHovered.includes(true)) {
				const updatedList = [...tabHovered];
				updatedList[index] = true;
				setTabHovered(updatedList);
			}
		},
		[tabHovered],
	);
	const onTabLeave = useCallback(
		(index: number) => {
			const updatedList = [...tabHovered];
			updatedList[index] = false;
			setTabHovered(updatedList);
		},
		[tabHovered],
	);
	const onPathClick = useCallback((label: string, path: string) => {
		if (label === 'ORCA 바로가기') {
			window.location.href = path;
		} else {
			navigate(path);
		}
	}, []);
	const onGlobeClicked = useCallback(() => {
		setGlobeToggle((prev) => !prev);
	}, [globeToggle]);

	return (
		<Gnb
			tabs1={tabs1}
			tabs2={tabs2}
			onTabEnter={onTabEnter}
			onTabLeave={onTabLeave}
			tabHovered={tabHovered}
			onPathClick={onPathClick}
			tab1List={tab1List}
			globeToggle={globeToggle}
			onGlobeClicked={onGlobeClicked}
			languages={languages}
		/>
	);
};

export default GnbContainer;
