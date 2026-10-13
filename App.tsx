import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import styles from './Styles';

export default function App() {
  // Solo para que el TextInput sea editable; no hace nada más
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.root}>
        {/* ================= HEADER ================= */}
        <View style={styles.header}>
          <View style={styles.brandContainer}>
            <View style={styles.brandIcon}>
              <Text style={styles.brandIconText}>🧓</Text>
            </View>
            <View style={{flexShrink: 1}}>
              <Text style={styles.brandTitle}>AdultCare</Text>
              <Text style={styles.brandSubtitle}>Modo Accesible Activo</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.sosButton} activeOpacity={0.8}>
            <Text style={styles.sosIcon}>🚨</Text>
            <Text style={styles.sosText}>SOS</Text>
          </TouchableOpacity>
        </View>

        {/* ================= CONTENIDO PRINCIPAL ================= */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          {/* Saludo */}
          <View style={styles.greetingContainer}>
            <View style={styles.statusPill}>
              <View style={styles.statusDot} />
              <Text style={styles.statusPillText}>Listo para escucharte</Text>
            </View>
            <Text style={styles.greetingTitle}>¡Hola, Carmen!</Text>
            <Text style={styles.greetingSubtitle}>¿Qué deseas hacer hoy?</Text>
          </View>

          {/* Botón gigante de voz */}
          <View style={styles.voiceSection}>
            <View style={styles.voiceRingWrapper}>
              <View style={styles.voiceOuterRing} pointerEvents="none" />
              <TouchableOpacity style={styles.voiceButton} activeOpacity={0.85}>
                <View style={styles.voiceIconCircle}>
                  <Text style={styles.voiceIconText}>🎤</Text>
                </View>
                <Text style={styles.voiceLabel}>TOCA Y HABLA</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.feedbackBadge}>
              <Text style={styles.feedbackText}>
                Pulsa el botón verde para hablar
              </Text>
            </View>
          </View>

          {/* Entrada de texto */}
          <View style={styles.chatCard}>
            <TextInput
              style={styles.chatInput}
              placeholder="O escribe aquí tu mensaje..."
              placeholderTextColor="#3e4949"
              value={text}
              onChangeText={(t: string) => setText(t)}
            />
            <TouchableOpacity style={styles.sendButton} activeOpacity={0.8}>
              <Text style={styles.sendIcon}>➤</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* ================= BARRA DE NAVEGACIÓN INFERIOR ================= */}
        <View style={styles.bottomNav}>
          <TouchableOpacity
            style={[styles.navTab, styles.navTabActive]}
            activeOpacity={0.8}>
            <Text style={styles.navIcon}>🎤</Text>
            <Text style={[styles.navLabel, styles.navLabelActive]}>
              AdultCare
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.navTab, styles.navTabFamily]}
            activeOpacity={0.8}>
            <Text style={styles.navIcon}>📊</Text>
            <Text style={styles.navLabel}>Familia</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.navTab, styles.navTabSettings]}
            activeOpacity={0.8}>
            <Text style={styles.navIcon}>🛡️</Text>
            <Text style={styles.navLabel}>Ajustes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
