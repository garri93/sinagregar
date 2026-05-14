import { Text, View, ScrollView } from 'react-native';

import SearchInput from 'src/components/SearchInput';
import ContactCard from '@/components/ContactCard';


export default function Contacts() {

  const dateSystem = new Date();

  const filtersContact = [
    {
      key: 'prefijo',
      placeholder: 'prefijo',
      type: 'number',
      label: 'Prefijo',
    },
    {
      key: 'platform',
      type: 'select',
      options: ['whatsapp', 'telegram'],
      label: 'Plataforma',
    },
    {
      key: 'date-of-last-interaction-inicio',
      placeholder: dateSystem.toLocaleDateString(),
      type: 'date',
      label: 'Fecha Inicial',
    },
    {
      key: 'date-of-last-interaction-final',
      placeholder: dateSystem.toLocaleDateString(),
      type: 'date',
      label: 'Fecha Final',
    },
  ];

  return (
    <View>
      <View>
        <SearchInput extraFilters={filtersContact} />
      </View>

      <View className="">
        <ScrollView >
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </ScrollView>
      </View>
    </View>
  );
}
