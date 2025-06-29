<template>
  <div class="sidebar-container">
    <!-- Header Section -->
    <div class="sidebar-header">
      <div class="logo-section">
        <div class="logo-placeholder">
          <Icon icon="mdi:car-sports" class="logo-icon" />
        </div>
        <div class="brand-info">
          <span class="brand-name">RevXsuper</span>
          <span class="brand-subtitle">Car Management</span>
        </div>
      </div>
      <button @click="closeSidebar" class="close-button">
        <Icon icon="material-symbols:close" />
      </button>
    </div>

    <!-- Navigation Section -->
    <nav class="navigation">
      <div class="nav-group">
        <div class="nav-group-label">Main</div>

        <div
          class="nav-item active"
          @click="$router.push({ name: 'dashboard' })"
        >
          <Icon icon="material-symbols:dashboard-rounded" />
          <span>Dashboard</span>
        </div>

        <div class="nav-item" @click="$router.push({ name: 'bookmarks' })">
          <Icon icon="material-symbols:bookmark-outline" />
          <span>Bookmarks</span>
        </div>

        <div class="nav-item">
          <Icon icon="material-symbols:inventory-2-outline" />
          <span>Products</span>
        </div>

        <div class="nav-item">
          <Icon icon="lsicon:badge-promotion-outline" />
          <span>Promotions</span>
        </div>

        <div class="nav-item">
          <Icon icon="material-symbols:analytics-outline" />
          <span>Analytics</span>
        </div>
      </div>

      <!-- Settings Group -->
      <div class="nav-group">
        <div class="nav-group-label">Settings</div>

        <div class="nav-item">
          <Icon icon="material-symbols:palette-outline" />
          <span>Appearance</span>
        </div>

        <div class="nav-item">
          <Icon icon="material-symbols:notifications-outline" />
          <span>Notifications</span>
        </div>

        <div class="nav-item">
          <Icon icon="material-symbols:help-outline" />
          <span>Help & Support</span>
        </div>
      </div>
    </nav>

    <!-- User Section -->
    <div class="user-section">
      <div class="user-info">
        <div class="user-avatar">
          <Icon icon="material-symbols:person" />
        </div>
        <div class="user-details">
          <span class="user-name">Uchiha Itachi</span>
          <span class="user-email">itachi@revxsuper.com</span>
        </div>
      </div>
      <div class="user-actions">
        <button class="user-menu-button" title="User menu">
          <Icon icon="material-symbols:more-vert" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "Sidebar",
  components: {
    Icon,
  },
  methods: {
    closeSidebar() {
      this.$emit("close-sidebar");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap");

.sidebar-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 280px;
  height: 100vh;
  background: linear-gradient(180deg, #ffffff 0%, #fafbfd 100%);
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03), 0 8px 32px rgba(0, 0, 0, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.06);
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  backdrop-filter: blur(20px);
}

/* Header Section */
.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(20px);
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-placeholder {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.logo-icon {
  color: white;
  font-size: 20px;
}

.brand-info {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1a202c;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.brand-subtitle {
  font-weight: 500;
  font-size: 12px;
  color: #718096;
  line-height: 1.2;
}

.close-button {
  background: rgba(0, 0, 0, 0.04);
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  color: #718096;
}

.close-button:hover {
  background: rgba(0, 0, 0, 0.08);
  color: #2d3748;
  transform: scale(1.05);
}

/* Navigation Section */
.navigation {
  flex: 1;
  padding: 24px 0;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.navigation::-webkit-scrollbar {
  display: none;
}

.nav-group {
  margin-bottom: 32px;
}

.nav-group:last-child {
  margin-bottom: 0;
}

.nav-group-label {
  font-family: "Manrope", sans-serif;
  font-weight: 600;
  font-size: 11px;
  color: #a0aec0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0 24px;
  margin-bottom: 12px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 24px;
  margin: 0 16px;
  border-radius: 12px;
  font-weight: 500;
  font-size: 14px;
  color: #4a5568;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border: 1px solid transparent;
}

.nav-item:hover {
  background: rgba(102, 126, 234, 0.08);
  color: #667eea;
  border-color: rgba(102, 126, 234, 0.15);
}

.nav-item.active {
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.1) 0%,
    rgba(118, 75, 162, 0.1) 100%
  );
  color: #667eea;
  border-color: rgba(102, 126, 234, 0.2);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.15);
}

.nav-item.active::before {
  content: "";
  position: absolute;
  left: -16px;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 20px;
  background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
  border-radius: 0 2px 2px 0;
}

.nav-badge {
  margin-left: auto;
  padding: 2px 8px;
  background: #e2e8f0;
  color: #718096;
  font-size: 11px;
  font-weight: 600;
  border-radius: 12px;
  min-width: 20px;
  text-align: center;
}

.nav-badge.new {
  background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
  color: white;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* User Section */
.user-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  background: rgba(255, 255, 255, 0.95);
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(20px);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.user-avatar {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.user-details {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.user-name {
  font-weight: 600;
  font-size: 14px;
  color: #1a202c;
  line-height: 1.2;
}

.user-email {
  font-weight: 400;
  font-size: 12px;
  color: #718096;
  line-height: 1.2;
}

.user-actions {
  display: flex;
  gap: 4px;
}

.user-menu-button {
  background: rgba(0, 0, 0, 0.04);
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  color: #718096;
}

.user-menu-button:hover {
  background: rgba(0, 0, 0, 0.08);
  color: #2d3748;
  transform: scale(1.05);
}

/* Responsive Design */
@media (max-width: 768px) {
  .sidebar-container {
    width: 100%;
    max-width: 320px;
  }

  .nav-item {
    margin: 0 12px;
  }
}

/* Icon Styling */
.sidebar-container :deep(svg) {
  width: 20px;
  height: 20px;
  color: inherit;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Smooth transitions for all interactive elements */
* {
  transition: color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
}

/* Focus states for accessibility */
.nav-item:focus,
.close-button:focus,
.user-menu-button:focus {
  outline: 2px solid #667eea;
  outline-offset: 2px;
}
</style>
