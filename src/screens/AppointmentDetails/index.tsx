import React from "react";
import { Fontisto } from '@expo/vector-icons'
import { ImageBackground, Text, View, FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import BannerImg from '../../assets/banner.png';

import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { Header } from '../../components/Header';
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";


export function AppointmentDetails() {

    const members = [
        {
            id: '1',
            username: 'Dawan',
            avatar_url: 'https://github.com/dawanlago.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Dani',
            avatar_url: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg',
            status: 'offline'
        }
    ]

    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />
            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>Lendários</Text>
                    <Text style={styles.subtitle}>É hoje que vamos chegar ao challenger sem perder uma partida da md10.</Text>
                </View>
            </ImageBackground>
            <ListHeader
                title="Jogadores"
                subtitle="Total 3"
            />
            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member
                        data={item}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.members}
            />

            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida" />
            </View>
        </Background >
    )
}