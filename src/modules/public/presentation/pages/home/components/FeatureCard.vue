<script setup lang="ts">
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faFireFlameCurved,
  faPalette,
  faArrowUpRightDots,
} from '@fortawesome/free-solid-svg-icons';

import Icon from '@/common/presentation/components/Icon.vue';

interface ICardsContent {
  title: string;
  description: string;
  icon: IconDefinition;
}

const cardsContent: ICardsContent[] = [
  {
    title: 'Brand recognition',
    description:
      'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
    icon: faArrowUpRightDots,
  },
  {
    title: 'Detailed records',
    description:
      'Gain insight into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions',
    icon: faFireFlameCurved,
  },
  {
    title: 'Fully customizable',
    description:
      'Improve and brand awareness and cover discoverability through customizable links, superchargings audience engagement',
    icon: faPalette,
  },
];
</script>

<template>
  <div class="feature-card-wrapper">
    <article
      v-for="card in cardsContent"
      :key="card.description"
    >
      <div>
        <span>
          <Icon
            :icon="card.icon"
            size="3x"
            aria-hidden="true"
          />
        </span>
      </div>
      <h3>{{ card.title }}</h3>
      <p>{{ card.description }}</p>
    </article>
  </div>
</template>

<style scoped lang="scss">
.feature-card-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: calc(var(--space-1));

  article {
    background-color: var(--color-light-dark);
    border-radius: var(--radius-default);
    box-shadow: 0 2px 16px #1a1a1a40;
    box-shadow: inset 0 var(--space-4) var(--color-lighten-light-dark);
    padding: var(--space-2) var(--space-1);
    text-align: center;

    p {
      color: var(--color-gray);
      margin-top: calc(var(--space-1) * 1.5);
    }

    div {
      align-items: center;
      display: flex;
      justify-content: center;
      padding-bottom: var(--space-1);

      span {
        background-color: #3b3053;
        border-radius: var(--radius-full);
        color: var(--color-brand);
        display: grid;
        height: 80px;
        overflow: hidden;
        padding: var(--space-1);
        place-items: center;
        width: 80px;
      }
    }
  }
}
</style>
