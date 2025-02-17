<script setup lang="ts">
import Icon from '@/common/presentation/components/Icon.vue';
import Logo from '@/common/presentation/components/Logo.vue';
import {
  faSquareFacebook,
  faTwitter,
  faPinterest,
  faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
</script>

<template>
  <section>
    <div class="section-wrapper">
      <div class="section-wrapper__logo">
        <Logo />
      </div>
      <ul class="section-wrapper__out-list">
        <li>
          <h3>Features</h3>
          <ul class="section-wrapper__in-list">
            <li>Link shortening</li>
            <li>Branded links</li>
            <li>Analytics</li>
            <li>QR Code generation</li>
          </ul>
        </li>
        <li>
          <h3>Resources</h3>
          <ul class="section-wrapper__in-list">
            <li>
              <RouterLink to="">
                Blog
                <Icon :icon="faLink" />
              </RouterLink>
            </li>
            <li>
              <RouterLink to="">
                Developers
                <Icon :icon="faLink" />
              </RouterLink>
            </li>
            <li>
              <RouterLink to="">
                Support
                <Icon :icon="faLink" />
              </RouterLink>
            </li>
          </ul>
        </li>
        <li>
          <h3>Company</h3>
          <ul class="section-wrapper__in-list">
            <li>
              <RouterLink to="">
                About
                <Icon :icon="faLink" />
              </RouterLink>
            </li>
            <li>
              <RouterLink to="">
                Our team
                <Icon :icon="faLink" />
              </RouterLink>
            </li>
            <li>
              <RouterLink to="">
                Contact
                <Icon :icon="faLink" />
              </RouterLink>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="section-wrapper__out-list section-wrapper__social-media">
        <li>
          <RouterLink to="">
            <Icon
              :icon="faSquareFacebook"
              size="2xl"
              class="icon icon-facebook"
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="">
            <Icon
              :icon="faTwitter"
              size="2xl"
              class="icon icon-twitter"
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="">
            <Icon
              :icon="faPinterest"
              size="2xl"
              class="icon icon-pinterest"
            />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="">
            <Icon
              :icon="faSquareInstagram"
              size="2xl"
              class="icon icon-instagram"
            />
          </RouterLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  margin-inline: calc((-50dvw + (var(--scrollbar-width, 15px) / 2)) + 50%);

  .section-wrapper {
    padding-inline: var(--space-1);
    text-align: center;

    &__logo {
      margin-bottom: var(--space-3);
    }

    &__out-list {
      margin-bottom: var(--space-2);

      h3 {
        margin-bottom: calc(var(--space-1) / 2);
      }
    }

    &__in-list {
      display: flex;
      flex-direction: column;
      margin-bottom: var(--space-1);
      row-gap: calc(var(--space-1) / 2);

      :where(li, li > a) {
        color: var(--color-gray);
      }

      li > a {
        align-items: center;
        column-gap: calc(var(--space-1) / 4);
        cursor: pointer;
        display: inline-flex;

        &:hover {
          text-decoration: underline;
          color: var(--color-darken-gray);
        }
      }
    }

    &__social-media {
      align-items: center;
      column-gap: var(--space-1);
      display: flex;
      justify-content: center;

      .icon {
        --_color-social-media-facebook: #3b5897;
        --_color-social-media-twitter: #00aceb;
        --_color-social-media-instagram: #e43f5d;
        --_color-social-media-pinterest: #e60023;

        cursor: pointer;

        @each $social-media in ('facebook', 'twitter', 'instagram', 'pinterest')
        {
          &-#{$social-media} {
            color: var(--_color-social-media-#{$social-media});
          }
        }
      }
    }
  }
}
</style>
