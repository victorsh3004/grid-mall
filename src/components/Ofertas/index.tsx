/** @format */

import * as React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import PaperImage from '../PaperImage';

export interface OfertasProps {
	navigation?: any;
}

const Ofertas: React.SFC<OfertasProps> = props => {
	const { navigation } = props;
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Nuevas ofertas: </Text>
			<FlatList
				style={{ padding: 5 }}
				horizontal
				key='ofertsList'
				ItemSeparatorComponent={() => <View style={{ width: 10 }}></View>}
				data={[
					{
						uri:
							'https://cdn.tn.com.ar/sites/default/files/styles/1366x765/public/2018/01/30/0130_alimentos_saludable_1280.jpg',
						title: 'Semana saludable',
						description: 'dasd'
					},
					{
						uri: 'https://www.protocolo.org/extfiles/i-103-cG.15043.1.jpg',
						title: 'semana mixto',
						description: 'dasd'
					},
					{
						uri:
							'https://media-cdn.tripadvisor.com/media/photo-s/12/0b/28/0e/para-compartir.jpg',
						title: 'semana criollo',
						description: 'dasd'
					},
					{ uri: 'dasdasd', title: 'dasdasd', description: 'dasd' },
					{ uri: 'dasdasd', title: 'dasdasd', description: 'dasd' }
				]}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item, index }) => (
					<PaperImage
						uri={item.uri}
						title={item.title}
						description={item.description}
					/>
				)}></FlatList>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 0,
		paddingBottom: 10
	},
	text: {
		color: 'black',
		fontSize: 15,
		padding: 10,
		fontWeight: 'bold'
	}
});

export default Ofertas;
