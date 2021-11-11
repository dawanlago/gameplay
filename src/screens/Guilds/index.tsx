import React from 'react'
import { View, FlatList } from 'react-native'

import Guild, { GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles'

type Props = {
    handleGuildsSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildsSelect }: Props) {

    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'Galera do Game',
            icon: 'image.png',
            owner: true
        },
        {
            id: '3',
            name: 'Bonde do PT',
            icon: 'image.png',
            owner: true
        },
        {
            id: '4',
            name: 'Maron Top',
            icon: 'image.png',
            owner: true
        },
        {
            id: '5',
            name: 'Maron Top',
            icon: 'image.png',
            owner: true
        },
        {
            id: '6',
            name: 'Maron Top',
            icon: 'image.png',
            owner: true
        },
        {
            id: '7',
            name: 'Maron Top',
            icon: 'image.png',
            owner: true
        },
    ]

    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild
                        data={item}
                        onPress={() => handleGuildsSelect(item)}
                    />
                )}
                contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                ListHeaderComponent={<ListDivider isCentered />}
                style={styles.guilds}
            />
        </View>
    )
}
