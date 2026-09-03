import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationStack {
            VStack(alignment: .leading, spacing: 24) {
                VStack(alignment: .leading, spacing: 10) {
                    Image(systemName: "textformat.abc")
                        .font(.system(size: 42, weight: .semibold))
                        .foregroundStyle(.tint)

                    Text("Capital Safari")
                        .font(.largeTitle.weight(.bold))

                    Text("Make every page uppercase in Mobile Safari.")
                        .font(.title3)
                        .foregroundStyle(.secondary)
                }

                VStack(alignment: .leading, spacing: 14) {
                    Label("Open Settings", systemImage: "gear")
                        .font(.headline)
                    Text("Go to Safari → Extensions → Capital Safari and allow it on the websites where you want it to run.")
                        .foregroundStyle(.secondary)

                    Label("Turn it on", systemImage: "power")
                        .font(.headline)
                    Text("Return to Safari and reload a page. The extension converts its visible text to capital letters automatically.")
                        .foregroundStyle(.secondary)
                }
                .padding(20)
                .background(.thinMaterial, in: RoundedRectangle(cornerRadius: 20, style: .continuous))

                Spacer()
            }
            .padding(24)
            .navigationTitle("Capital Safari")
        }
    }
}

#Preview {
    ContentView()
}
