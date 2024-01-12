import type { Schema, Attribute } from '@strapi/strapi';

export interface PaquetePaquetes extends Schema.Component {
  collectionName: 'components_paquete_paquetes';
  info: {
    displayName: 'paquetes';
    icon: 'archive';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    precio: Attribute.Decimal & Attribute.Required;
    status: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'paquete.paquetes': PaquetePaquetes;
    }
  }
}
